export default function UserCard ({
    user: {
        id, name, username, email,
        address: { street, suite, city, zipcode, geo: { lat, lng } },
        phone, website,
        company: {
          name:cname,
          catchPhrase,
          bs
        }
      } }) {
    
      return (
        <>
          <fieldset className="user-card">
            <legend>#{id} {username}</legend>        
             <h3>{name}</h3>
             <span> 📧<a href={`mailto:${email}`}>{email}</a>📞<a href={`tel:${phone}`}>{phone}</a></span>
             <span>🌐<a href={`http://${website}`}>{website}</a></span>
              <span title={zipcode}><a href={`https://maps.google.com/maps?ll=${lat},${lng}`}>{street},{suite},{city}</a></span>
              <span><b>{cname}</b><br/>{catchPhrase}<br/>{bs}</span>
        </fieldset>
        </>
      ) 
    }


   