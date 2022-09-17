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
            [1, 1, 1, 0, 3],
            [1, 1, 0, 1, 0],
            [1, 0, 1, 1, 1],
        ]) // set data here for the plot (z values)
    }

    const handleDownloadMeasurements = () => {
        // TODO: Check if data downloaded correctly with parentheses
        const element = document.createElement('a')
        const file = new Blob(sensorsData, {
            type: "text/plain"
        })
        element.href = URL.createObjectURL(file)
        element.download = 'measurements.txt'
        document.body.appendChild(element)
        element.click()
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
                <button onClick={handleGetData}>Calcular Mapa</button>
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
                            type: 'heatmap'
                        }
                    ]}
                layout={{ width: 620, height: 540, title: 'Mapa de luxes' }
                }
            />
            <div className='card'>
                <button>Calculate Mapa</button>
                <button onClick={handleDownloadMeasurements}>Descargar Mediciones</button>
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
 * - Download file with data
 *  https://thewebdev.info/2021/11/20/how-to-download-a-string-as-txt-file-in-react/
 * 
 */