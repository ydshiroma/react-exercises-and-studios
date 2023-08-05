import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

function Profile()
{
   const listItem = oceans.map(ocean => 
      <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
         <img src={ocean.image} alt={ocean.name}/>
         <h1>{ocean.name}</h1>
         <h3>Facts</h3>
         <ol>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
            <Button />
         </ol>
      </div>);
   return(
         <ul>
            {listItem}
         </ul>
   );
}

export default Profile;