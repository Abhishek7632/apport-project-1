import "./Card.css";
import { FaCircle } from "react-icons/fa";
import UserIcon from "../UserIcon/UserIcon";

const Card = ({ ticket, user, icon, statusIcon, statusColor, bgColor, featureRequest }) => {
  const initials = user?.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  const displayStatusIcon = statusIcon ? (
    <span style={{ color: statusColor }}>{statusIcon}</span>
  ) : null;

  return (
    <div className="card">
      <div className="card_header">
        <p className="card_id" style={{color:"grey"}}>{ticket?.id}</p>
        {user && (
          <UserIcon
            initials={initials}  // Fixed prop name
            available={user?.available}
            bgColor={bgColor}
          />
        )}
      </div>
      <div className="card_info">
        {displayStatusIcon}
        <p>{ticket?.title}</p>
      </div>
      <div className="card_footer">
        {icon && (
          <div>
            {icon}
          </div>
        )}
        <div className="card_tag">
          <FaCircle />
          {ticket?.tag?.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>

      {/* Adding the Feature Request here */}
      {featureRequest && (
        <div className="card_feature_request">
          <p>{featureRequest}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
