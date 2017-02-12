"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1> Admin Page </h1>
                    <p>React, React Router </p>
            </div>
        );
    }

});

module.exports = Home;