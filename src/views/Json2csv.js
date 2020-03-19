import React, { Component } from 'react'

class Json2csv extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jsonCode: '',
      jsonFile: '',
      csvCode: '',
      saveCsvFilename: 'output.csv'
    }
  }

  handleReset () {
    const state = this.state
    state.jsonCode = ''
    state.csvCode = ''
    state.saveCsvFilename = 'output.csv'
    state.jsonFile = ''
    this.setState(state)
  }

  handleChange (e) {
    const state = this.state
    let value = e.target.value
    switch (e.target.id) {
      case 'jsonFilepath':
        state.jsonFilepath = value
        break
      case 'jsonCode':
        state.jsonCode = value
        state.csvCode = ''
        break
      case 'jsonFiles':
        this.getFileList(e)
        break
      case 'saveCsvFilename':
        if (value.slice(-4) !== '.csv') {
          value = value + '.csv'
        }
        state.saveCsvFilename = value
        break
      default:
        console.log(e.target.id)
        break
    }
    this.setState(state)
  }

  getFileList (e) {
    const state = this.state
    const files = e.target.files
    state.jsonFile = files[0]
    this.setState(state)
  }

  handleSubmitJson (e) {
    e.preventDefault()
    const state = this.state
    if (state.jsonCode.slice(0, 1) !== '[') {
      state.jsonCode = '[' + state.jsonCode + ']'
    }
    try {
      var jsonObj = JSON.parse(this.state.jsonCode)
      const keys = Object.keys(jsonObj[0])
      state.csvCode += keys.toString()
      jsonObj.forEach(row => {
        state.csvCode += '\n' + Object.values(row).toString()
      })
    } catch (error) {
      window.alert('JSON inválido')
      state.jsonCode = ''
      state.csvCode = ''
    }
    this.setState(state)
  }

  handleClick (e) {
    switch (e.target.id) {
      case 'readJsonFile':
        this.readJsonFile()
        break
      default:
        console.warn(e.target.id)
        break
    }
  }

  readJsonFile () {
    var state = this.state
    const file = state.jsonFile

    var reader = new window.FileReader()
    reader.onload = (e) => {
      state.jsonCode = e.target.result
    }
    reader.onloadend = () => {
      this.setState(state)
    }
    reader.onerror = (err) => {
      console.warn(err)
    }

    try {
      reader.readAsText(file)
    } catch (error) {
      if (error) window.alert('Please select a valid file')
    }
  }

  render () {
    function SaveCsvBtn (props) {
      const btnText = 'Save CSV file'
      if (props.csvCode !== '') {
        return (
          <a
            className='btn btn-secondary'
            download={props.saveCsvFilename}
            href={'data:application/octet-stream,' + props.csvCode}
          >
            {btnText}
          </a>
        )
      } else {
        return (
          <button
            className='btn btn-secondary'
            onClick={(e) => {
              window.alert('Empty CSV code')
              e.preventDefault()
            }}
            id='emptySaveCsvBtn'
          >
            {btnText}
          </button>
        )
      }
    }

    return (
      <div className='jumbotron'>
        <h1>JSON 2 CSV</h1>
        <div className='row'>
          <div className='col'>
            <form
              onSubmit={(e) => this.handleSubmitJson(e)}
              onReset={() => this.handleReset()}
            >
              <label>JSON text:</label><br />
              <div className='row col-11 col-md-7 col-lg-6 col-xl-11 input-group mb-3'>
                <input
                  type='file'
                  className='btn btn-secondary mb-3'
                  id='jsonFiles'
                  name='jsonFiles[]'
                  accept='.json'
                  onChange={(e) => this.handleChange(e)}
                  // multiple
                />
                <input
                  type='button'
                  value='Load file'
                  id='readJsonFile'
                  onClick={(e) => this.handleClick(e)}
                />
                <output id='jsonFile' />

              </div>
              <div className='row col-11'>
                <textarea
                  id='jsonCode'
                  onChange={(e) => this.handleChange(e)}
                  rows='10'
                  cols='45'
                  placeholder='or paste JSON code here.'
                  value={this.state.jsonCode}
                />
              </div>
              <div className='row'>
                <div className='col-4'>
                  <input className='btn btn-secondary' type='submit' value='Convert to CSV' />
                </div>
                <div className='col-3'>
                  <input className='btn btn-secondary' type='reset' value='Reset' />
                </div>
              </div>
            </form>
          </div>
          <div className='col'>
            <form>
              <label>CSV text:</label><br />
              <textarea
                id='csvCode'
                rows='10'
                cols='45'
                placeholder='CSV code here.'
                value={this.state.csvCode}
                readOnly
              />
              <div className='row'>
                <div className='col input-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='CSV filename'
                    id='saveCsvFilename'
                    onChange={(e) => this.handleChange(e)}
                  />
                  <div className='input-group-append'>
                    <SaveCsvBtn
                      csvCode={this.state.csvCode}
                      saveCsvFilename={this.state.saveCsvFilename}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Json2csv
