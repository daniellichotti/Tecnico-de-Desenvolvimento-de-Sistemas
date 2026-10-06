import { DeliverContainer, HeaderContainer, SearchFoodContainer } from "./styled";
import Logo from '../../assets/Logo.svg'
import MapMarker from '../../assets/map-marker-alt.svg'
import UserIcon from '../../assets/user.svg'
import SearchIcon from '../../assets/Search.svg'

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

            <SearchFoodContainer>
                
                <img style={{height: 18, width: 18}} src={SearchIcon} alt="" />
                <input type="text" placeholder="Search Food"/>

                <button>
                    <img src={UserIcon} alt="" />
                    Login</button>
            </SearchFoodContainer>
        </HeaderContainer>
    )
};
