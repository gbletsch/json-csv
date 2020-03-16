import React, { Component } from 'react'

class Json2csv extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jsonCode: '',
      jsonFilepath: '',
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
    switch (e.target.id) {
      case 'jsonFilepath':
        console.log(e.target.value)
        break
      default:
        break
    }
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
    switch (e.target.id) {
      case 'uploadJson':
        this.uploadFile()
        break
      default:
        break
    }
  }

  uploadFile (e) {
    console.log('upload File')
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
                  id='jsonFilepath'
                  type='text'
                  className='form-control'
                  placeholder='JSON filepath'
                  onChange={(e) => this.handleChange(e)}
                  // aria-label="Recipient's username"
                  // aria-describedby='basic-addon2'
                />
                <div className='input-group-append'>
                  <button
                    className='btn btn-secondary'
                    type='button'
                    id='uploadJson'
                    onClick={(e) => this.handleClick(e)}
                  >
                      Upload
                  </button>
                </div>
              </div>
              <div className='row col-11'>
                <textarea
                  id='jsonCode'
                  onChange={(e) => this.handleChangeJson(e)}
                  rows='10'
                  cols='45'
                  placeholder='Paste JSON code here.'
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
