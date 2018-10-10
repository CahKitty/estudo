import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import FavoriteIcon from '@material-ui/icons/Favorite'


const AppIntro = () => {
    return (
        <p className="App-intro">
          Halo, Leute! Das ist Meine erste Spiele mit React :)
          <DeleteIcon color="primary" />
          <DeleteIcon color="secondary" />
          <AccessAlarmIcon color="secondary"/>
          <FavoriteIcon color="secondary"/>
        </p>
    )
}

export default AppIntro
