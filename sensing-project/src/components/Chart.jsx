import '../App.css'
import Plot from 'react-plotly.js'

function Chart() {
    const sensorsURL = 'http://sensors.local/get-data'
    let sensorData;

    async function getDataFromSensors() {
        const response = await fetch(sensorsURL)
        if (!response.ok) {
            throw new Error(`Error Status ${response.status}`)
        }
        return response.text()
    }

    return (
        <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                },
                { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
        />
    )

}

export default Chart