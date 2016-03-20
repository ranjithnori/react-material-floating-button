'use strict';

var React = require('react');
var classnames = require('classnames');

var MainButton = React.createClass({
  getDefaultProps: function(){
    return {
      href: '#',
      onClick: function(){},
      iconResting: '',
      iconActive: '',
      label: null,
      src: null,
      imageClass: null
    };
  },
  render: function(){
    var iconResting = classnames('mfb-component__main-icon--resting', this.props.iconResting);
    var iconActive = classnames('mfb-component__main-icon--active', this.props.iconActive);
    var mainClass = classnames('mfb-component__button--main', this.props.className);
    if(this.props.label){
      return (
        <a href={this.props.href} className={mainClass} onClick={this.props.onClick} data-mfb-label={this.props.label}>
          <i className={iconResting}></i>
          <i className={iconActive}></i>
        </a>
      );
    }
    else if(this.props.src){
      return (
        <a href={this.props.href} className={mainClass} onClick={this.props.onClick} data-mfb-label={this.props.label}>
          <img className={this.props.imageClass} src={this.props.src}/>
        </a>
      );
    } else {
      return (
        <a href={this.props.href} className={mainClass} onClick={this.props.onClick}>
          <i className={iconResting}></i>
          <i className={iconActive}></i>
        </a>
      );
    }
  }
});

module.exports = MainButton;
