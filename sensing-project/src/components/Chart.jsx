import '../App.css'
import Plot from 'react-plotly.js'
import { useState } from 'react'

function Chart() {
    const sensorsURL = 'http://sensors.local/get-data'
    const [sensorsData, setSensorsData] = useState(null)
    const handleGetData = () => {
        // Get your data manipulation
        setSensorsData(10) // set data here for the plot
    }

    async function getDataFromSensors() {
        const response = await fetch(sensorsURL)
        if (!response.ok) {
            throw new Error(`Error Status ${response.status}`)
        }
        return response.text()
    }

    if (sensorsData == null) {
        return (
            <>
                <h1>No data</h1>
                <button onClick={handleGetData}>Calculate Plot</button>
            </>
        )
    }
    return (
        <>
            <Plot
                data={
                    [
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        },
                        { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                    ]}
                layout={{ width: 520, height: 440, title: 'A Fancy Plot' }
                }
            />
            <div className='card'>
                <button>Calculate Plot</button>
                <button>Download Measurements</button>
            </div>

        </>

    )

}

export default Chart