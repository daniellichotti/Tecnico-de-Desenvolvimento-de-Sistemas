import { CitiesContainer, FooterContainer, InfoContainer, Infos, RightsContainer, TopCities } from "./styled";

export function Footer(){
    return (
        <FooterContainer>

            <h1>Our top cities</h1>
            <CitiesContainer>

                <TopCities>
                    <p>San Francisco</p>
                    <p>Miami</p>
                    <p>San Diego</p>
                    <p>East Bay</p>
                    <p>Long Beach</p>
                </TopCities>
                
                <TopCities>
                    <p>Los Angeles</p>
                    <p>Washington DC</p>
                    <p>Seattle</p>
                    <p>Portland</p>
                    <p>Nashville</p>
                </TopCities>
                
                <TopCities>
                    <p>New York City</p>
                    <p>Orange County</p>
                    <p>Atlanta</p>
                    <p>Charlotte</p>
                    <p>Denver</p>
                </TopCities>
                
                <TopCities>
                    <p>Chicago</p>
                    <p>Phoenix</p>
                    <p>Las Vegas</p>
                    <p>Sacramento</p>
                    <p>Oklahoma City</p>
                </TopCities>
                
                <TopCities>
                    <p>Columbus</p>
                    <p>New Mexico</p>
                    <p>Albuquerque</p>
                    <p>Sacramento</p>
                    <p>New Orleans</p>
                </TopCities>
            </CitiesContainer>
            
            <InfoContainer>
                <Infos>
                    <h2>Company</h2>
                    <p>About us</p>
                    <p>Team</p>
                    <p>Careers</p>
                    <p>Blog</p>
                </Infos>
                <Infos>
                    <h2>Contact</h2>
                    <p>Help & Support</p>
                    <p>Partner with us</p>
                    <p>Ride with us</p>
                </Infos>
                <Infos>
                    <h2>Legal</h2>
                    <p>Terms & Conditions</p>
                    <p>Refund & Cancellation</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </Infos>
            </InfoContainer>
            
            <RightsContainer>div3</RightsContainer>
        
        </FooterContainer>
    )
}