import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Banner = () => {
	const data = useStaticQuery(graphql`
    query {
      headphones: file(relativePath: { eq: "headphones.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

	return (
		<div className="banner">
			<div className="container">
				<div className="row">
					<div className="main-text">Nick Bansal</div>
					<div className="main-image">
						<Img fluid={data.headphones.childImageSharp.fluid} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
