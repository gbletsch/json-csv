import React, { Component } from 'react'
const writeFileP = require('write-file-p')

class Json2csv extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jsonCode: '',
      csvCode: ''
    }
  }

  handleReset () {
    const state = this.state
    state.jsonCode = ''
    state.csvCode = ''
    this.setState(state)
  }

  handleChangeJson (e) {
    const state = this.state
    state.jsonCode = e.target.value
    state.csvCode = ''
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
      alert('JSON inválido')
      state.jsonCode = ''
      state.csvCode = ''
    }
    this.setState(state)
  }

  handleClick (e) {
    const state = this.state
    writeFileP('$home/gui/Área de Trabalho/output.txt', state.csvCode, (err, data) => {
      console.log(err || data)
    })
  }

  render () {
    return (
      <div className='jumbotron'>
        <h1>JSON 2 CSV</h1>
        <div className='row'>
          <div className='col'>
            <form onSubmit={(e) => this.handleSubmitJson(e)} onReset={() => this.handleReset()}>
              <label>JSON text:</label><br />
              <textarea
                id='jsonCode'
                onChange={(e) => this.handleChangeJson(e)}
                rows='10'
                cols='45'
                placeholder='Paste JSON code here.'
                value={this.state.jsonCode}
              /><br />
              <input type='submit' value='Convert to CSV' />
              <input type='reset' value='Reset' />
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
              {/* <input type='button' id='saveCsvButton' value='Save CSV file' onClick={(e) => this.handleClick(e)} /> */}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Json2csv
