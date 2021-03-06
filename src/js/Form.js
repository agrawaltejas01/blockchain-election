import React from 'react'

class from extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.castVote(this.candidateId.value)
      }}>
        <div className='form-group'>
          <label>Select Candidate</label>
          <select ref={(input) => this.candidateId = input} className='form-control'>
            {this.props.candidates.map((candidate) => {
              return <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>Vote</button>
        <hr />
      </form>
    )
  }
}

export default from