import React from 'react'

export default class Header extends React.Component {
  state = {
    profile: {}
  }

  async componentDidMount() {
    await window.FB.api('/me', (profile) => {
      this.setState({ profile: profile })
    })
  }

  render() {
    const { name='' } = this.state.profile
    return (
      <div>
        <div className="head-title">{ name }</div>
      </div>
    )
  }
}