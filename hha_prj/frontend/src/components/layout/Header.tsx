import React, { ReactElement, FC } from 'react';

interface Props {
    title: string
}

const Header: FC<Props> = ({title}): ReactElement => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src="/static/logo.png" width="60" height="50"
                     className="d-inline-block align-top" alt="hha logo"/>
                <a className="navbar-brand" href="#">{title}</a>
            </nav>
        </div>
    )
}

export default Header

interface HeaderState {
    hasScrolled: boolean;
    title: string;
}

class AnimatedHeader extends React.Component<Props, HeaderState> {
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
                         width="60" height="50"
                         className="d-inline-block align-top" 
                         alt="hha logo"/>
                    <a className="navbar-brand" href="#">{this.state.title}</a>
                </div>
            </div>
        )
    }
}

// export default Header