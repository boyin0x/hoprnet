import React from 'react'
import PropTypes from 'prop-types'
import GenericSection from './GenericSection'
import Image from '../elements/Image'
import { SectionProps } from '../utils/SectionProps'
import FooterSocial from '../layout/partials/FooterSocial'

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
}

const ForYou = props => {
  return (
    <GenericSection {...props}>
      <div className="center-content">
        <div className="container-sm">
          <h2 className="section-header mt-0 mb-0 reveal-from-top" data-reveal-delay="150">
            We're here for you
          </h2>
          <div className="mb-32 hero-figure reveal-from-top" data-reveal-delay="200">
            <Image
              className="has-shadow"
              src={require('../assets/images/hopr-illustration-small.png')}
              alt="Hero"
              width={896}
              height={504}
              style={{
                borderRadius: '15px',
              }}
            />
          </div>
          <div className="pt-32 reveal-from-top" data-reveal-delay="300">
            You can reach us on any of these channels:
            <br />
            <br />
            <FooterSocial className="large" />
          </div>
        </div>
      </div>
    </GenericSection>
  )
}

ForYou.propTypes = propTypes
ForYou.defaultProps = defaultProps

export default ForYou
