import Header from "./common/Header";
import './App.css';
import './common/common.css';
function App() {
  let subscribers = [
    {
      id:
        1
      ,
      name: "Shilpa Bhat"
      ,
      phone: "8888888888"
    },
    {
      id:
        2
      ,
      name: "Srishti Gupta"
      ,
      phone: "9999999999"
    }
  ];
  
  return (
    
    <div>
      <Header heading="Phone Directory" />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>
        <button className="custom-btn delete-btn"> Delete</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        {
          subscribers.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
            </div>
          })
        }

      </div>
    </div>
  );
}
export default App;
