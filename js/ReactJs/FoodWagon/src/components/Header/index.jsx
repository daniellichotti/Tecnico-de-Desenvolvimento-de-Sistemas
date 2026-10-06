import { DeliverContainer, HeaderContainer } from "./styled";
import Logo from '../../assets/Logo.svg'
import MapMarker from '../../assets/map-marker-alt.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="" />

            <DeliverContainer>
                <span>Deliver to:</span>
                <img src={MapMarker} alt="" />
                <p>Current Location</p>
                <span>Mohammadpur Bus Stand, Dhaka</span>
            </DeliverContainer>
        </HeaderContainer>
    )
};
