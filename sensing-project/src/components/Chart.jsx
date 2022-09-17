import '../App.css'
import Plot from 'react-plotly.js'
import { useState } from 'react'

function Chart() {
    const sensorsURL = 'http://sensors.local/get-data'
    const [sensorsData, setSensorsData] = useState(null)
    const handleGetData = () => {
        // Get your data manipulation
        setSensorsData([
            [1, 0, 0, 1, 2],
            [1, 1, 1, 0, 0],
            [1, 1, 0, 1, 0],
            [1, 0, 1, 1, 1],
        ]) // set data here for the plot (z values)
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
                            z: sensorsData,
                            type: 'heatmap',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        }
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

/**
 * Documentation
 * 
 * - Example of using plotly inside React:
 *  https://community.plotly.com/t/plotly-heatmap-fix-color-range-in-react/53314
 * 
 * 
 */