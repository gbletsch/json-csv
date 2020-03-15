import React, { Component } from 'react'

class Json2csv extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jsonCode: '',
      csvCode: ''
    }
  }

  handleChangeJson (e) {
    this.setState({ jsonCode: e.target.value })
  }

  handleSubmitJson (e) {
    const state = this.state
    if (state.jsonCode.slice(0, 1) !== '[') {
      state.jsonCode = '[' + state.jsonCode + ']'
    }

    const jsonObj = JSON.parse(this.state.jsonCode)
    const keys = Object.keys(jsonObj[0])
    state.csvCode += keys.toString()
    jsonObj.forEach(row => {
      state.csvCode += '\n' + Object.values(row).toString()
    })
    this.setState(state)
    e.preventDefault()
  }

  componentDidUpdate () {
    console.log(this.state)
  }

  render () {
    return (
      <div className='jumbotron'>
        <h1>JSON 2 CSV</h1>
        <form onSubmit={(e) => this.handleSubmitJson(e)}>
          <label>JSON text:</label><br />
          <textarea id='jsonCode' onChange={(e) => this.handleChangeJson(e)} rows='10' cols='45' placeholder='Paste JSON code here.' /><br />
          <input type='submit' value='Convert to CSV' />
        </form>
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
        </form>
      </div>
    )
  }
}

export default Json2csv
