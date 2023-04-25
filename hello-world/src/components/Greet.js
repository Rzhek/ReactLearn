import React from 'react';

export const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {heroName} a.k.a {name}!</h1>
        </div>
    )
}
    