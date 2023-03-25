import React from 'react'

import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

type ContactLinkProps = {
  icon: IconType;
  link: string;
  name: string;
};

export const ContactLink = ({icon, link, name}:ContactLinkProps) => {
  return (
    <>{icon}<Link to={link}>{name}</Link></>
  )
}