import { useEffect, useState } from "react";
import "./App.css";
import { ListItem, ListItemText, Typography } from "@mui/material";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data));
    return () => {};
  }, []);
  return (
    <div>
      <Typography variant="h3">Reactivities</Typography>
      <ul>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default App;
