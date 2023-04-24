// Витягніть правильні дані
function extractData(obj) {
    return {x:obj.Horsepower, y:obj.Miles_per_Gallon};
}
function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}
// Дані ділянки
function tfPlot(values, surface) {
    tfvis.render.scatterplot(surface,
        {values:values, series:['Original', 'Predicted']},
        {xLabel:'Horsepower', yLabel:'MPG',});
}
// Основна функція
async function runTF() {
    const jsonData = await fetch("carsdata.json");
    let values = await jsonData.json();
    values = values.map(extractData).filter(removeErrors);
// Побудуйте дані
    const surface1 = document.getElementById("plot1");
    const surface2 = document.getElementById("plot2");
    tfPlot(values, surface1);
// Перемішайте дані
    tf.util.shuffle(values);
// Перетворення вхідних даних на тензори
    const inputs = values.map(obj => obj.x);
    const labels = values.map(obj => obj.y);
    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);
    const inputMin = inputTensor.min();
    const inputMax = inputTensor.max();
    const labelMin = labelTensor.min();
    const labelMax = labelTensor.max();
    const normInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const normLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));
// Створіть модель Tensorflow
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));
    model.add(tf.layers.dense({units: 1, useBias: true}));
    model.compile({
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError
    });
// Почати навчання
    await trainModel(model, normInputs, normLabels, surface2);
// Не нормалізувати дані
    let unX = tf.linspace(0, 1, 100);
    let unY = model.predict(unX.reshape([100, 1]));
    const unNormunX = unX
        .mul(inputMax.sub(inputMin))
        .add(inputMin);
    const unNormunY = unY
        .mul(labelMax.sub(labelMin))
        .add(labelMin);
    unX = unNormunX.dataSync();
    unY = unNormunY.dataSync();
// Перевірте модель
    let predicted = Array.from(unX);
    predicted = predicted.map(mapXY);

    function mapXY(value, index) {
        return {x: value, y: unY[index]};
    }
// Результат ділянки
    tfPlot([values, predicted], surface1);
// Кінець основної функції
}
// Асинхронна функція для навчання моделі
async function trainModel(model, inputs, labels, surface) {
    const batchSize = 25;
    const epochs = 50;
    const callbacks = tfvis.show.fitCallbacks(surface, ['loss'], {callbacks:['onEpochEnd']})
    return await model.fit(inputs, labels,
        {batchSize, epochs, shuffle:true, callbacks:callbacks}
    );
}
runTF();