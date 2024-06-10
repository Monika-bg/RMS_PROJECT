import React from 'react';
import images from './Images';
import './Subheading.css';

const SubHeading = ({ title }) => (
  <div className="subheading__container">
    <p className="subheading__title">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
