import React, { ReactElement, FC } from 'react';
import './Header.css'

interface Props {
    title: string
}

interface HeaderState {
    hasScrolled: boolean;
    title: string;
}

class Header extends React.Component<Props, HeaderState> {
    constructor(props: Props) {
        super(props)

        this.state = {
            hasScrolled: false,
            title: props.title
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event: Event) => {
        const scrollTop = window.pageYOffset
        this.setState({ hasScrolled: scrollTop > 50 })
    }

    render() {
        return (
            <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
                <div className="HeaderGroup">
                    <img src="/static/logo.png" 
                        width="30" height="25"
                        className="d-inline-block align-top" 
                        alt="hha logo"/>
                    <a className={this.state.hasScrolled ? 'TitleLabel TitleLabelScrolled' : 'TitleLabel'} href="#">{this.state.title}</a>
                </div>
            </div>
        )
    }
}

export default Header