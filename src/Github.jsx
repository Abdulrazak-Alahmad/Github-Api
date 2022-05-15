import React, { Component } from 'react'
import Api1 from './Api1'
import axios from 'axios'
export default class Github extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            email: 'null',
            userName: '',
            location: '',
            img: '',
            linkRepo: '',
            repos: []
        }
    }
    componentDidMount() {
        axios.get('http://api.github.com/users/Abdulrazak-Alahmad?client_id=ad5ec48fcd61db506a72&client_secret=a4451c34ca540503f5035374584d13a10188b314&sort=created')
            .then((response) => {
                console.log(response);
                this.setState({
                    fullName: response.data.name,
                    email: response.data.email,
                    userName: response.data.login,
                    location: response.data.location,
                    img: response.data.avatar_url,
                    linkRepo: response.data.repos_url
                })
                
                axios.get(response.data.repos_url)
                    .then((response) => {
                        
                        this.setState({
                            repos: response.data
                        })
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                <div className='firstPart'>
                    <div>
                        <img src={this.state.img} alt="abdulrazak"></img>
                    </div>
                    <div>
                        <table>
                            <thead />
                            <tbody>
                                <tr>
                                    <th>Fullname:</th>
                                    <th>{this.state.fullName}</th>
                                </tr>
                                <tr>
                                    <th>Username:</th>
                                    <th>{this.state.userName}</th>
                                </tr>
                                <tr>
                                    <th>Location:</th>
                                    <th>{this.state.location}</th>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <th>{this.state.email}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='repo'>
                <h2>User Repositories</h2>
                        {
                            this.state.repos.map((repo, index) => {
                                return (
                                    <div key={index} >
                                        <Api1 name={repo} index={index} />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        )
    }
}