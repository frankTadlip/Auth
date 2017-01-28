import React from "react";

import { Header } from "../views/header";

export class Root extends React.Component {
    render() {
        return (
            <section>
                <div>
                    <Header />
                </div>
                <hr />
                <div>
                    {this.props.children}
                </div>
            </section>
        );
    }
}