import React from 'react';
import './BtnAjoutRessource.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
export default function BtnAjoutRessource() {
  return (
    <Fab color="default" aria-label="add" style={{ position: 'absolute', bottom: 0, right: 0, margin: 30 }}>
      <AddIcon >
        <button className="BtnAjoutRessource">Ajouter</button>
      </AddIcon >
    </Fab>
  );
}