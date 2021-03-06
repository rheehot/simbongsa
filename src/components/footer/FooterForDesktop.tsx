import React from "react";
import { Responsive, Container, Segment, Grid, Header, Image } from "semantic-ui-react";

import './Footer.css'
import logo2 from 'assets/images/logo2.png';

interface Props { }

// export default function Header({ }: Props): ReactElement {
const FooterForDesktop = () => {
  return (
    <div>
      {/* 큰 화면에서 보여줌 */}
      <Responsive minWidth={1001}>
        <Segment vertical style={{ padding: '2em 0em', backgroundColor: "rgba(255, 147, 45, 0.61)", marginTop: "30px" }}>
          <Container>
            <Grid divided stackable>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header as='h4' content='About Us' />
                  <Container styk>
                    프론트엔드 : 윤성민, 임학수, 최솔지<br />
                　　백엔드 : 김동주, 박정환, 이신호<br />
                    <Image src={logo2} style={{ width: "6rem", padding: "0.3rem", margin: "auto" }} />
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
    </div>
  );
}

export default FooterForDesktop;
