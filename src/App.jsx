import "./App.css";
import { Welcome } from "./Welcome";
import Button from "./Button";
import { Hello } from "./Hello";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./ContactForm";
import { StyledForm } from "./StyledForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";
import { Greetings } from "./Greetings";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./UserDetails";
import { ProductList } from "./ProductList";
import { NameList } from "./NameList";
import { CustomButton } from "./CustomButton";

function App() {
  return (
    <div>
      <CustomButton />
      <NameList />
      <ProductList />
      <UserDetails
        name="John Nigels"
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role="admin"
      />
      <UserDetails
        name="April Shane"
        isOnline={true}
        hideOffline={true}
        role="vip"
      />
      <CardWrapper title="User Profile">
        <p>John Nigels</p>
        <p>nige@gmail.com</p>
        <button>Edit Profile</button>
      </CardWrapper>

      <Greetings name="John" message="Good Morning" />
      <Greetings name="Nigels" />
      <Greetings message="Welcome" />
      <Greetings />
      <Product
        title="Gaming Laptop"
        price={1299.99}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <Welcome name="John" alias="Never" />
      <Welcome name="Nigels" alias="Give" />
      <Welcome name="Sipe" alias="Up" />

      <CandidateProfile />
      <StyledForm />
      <ContactForm />
      <UserProfile />
      <Hello />
      <Button />
    </div>
  );
}

export default App;
