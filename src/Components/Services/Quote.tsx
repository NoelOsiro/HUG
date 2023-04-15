import React from 'react';
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

function Quote() {
    return (
        <Container>
            <blockquote className="blockquote slide-in">
                <p className="mb-5">
                    We are an organization that aims to address the rising cases of child abuse, high rates of school dropout, especially among girls at the primary level of education, limited access to sexual and reproductive health and rights for adolescents, limited access to orphans and vulnerable children in the community, high rates of unemployment among youth, and violations of women's rights.
                </p>
                <Link to="#mission">
                    <Button className="custom-button mt-4">Mission</Button>
                </Link>

            </blockquote>
        </Container>
    );
}

export default Quote;
