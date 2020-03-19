import React, { Component } from 'react'

class Json2csv extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jsonCode: '',
      jsonFile: '',
      csvCode: ''
    }
  }

  handleReset () {
    const state = this.state
    state.jsonCode = ''
    state.csvCode = ''
    this.setState(state)
  }

  handleChange (e) {
    const state = this.state
    switch (e.target.id) {
      case 'jsonFilepath':
        state.jsonFilepath = e.target.value
        break
      case 'jsonCode':
        state.jsonCode = e.target.value
        state.csvCode = ''
        break
      case 'jsonFiles':
        this.getFileList(e)
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
                <div className='col'>
                  <a className='btn btn-secondary' download='output.csv' href={'data:application/octet-stream,' + this.state.csvCode}>Save CSV file</a>
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
