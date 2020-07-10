import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import EditTapForm from './EditTapForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../actions';
import { Button } from 'reactstrap';


class TapControl extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      selectedTap: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        selectedTap: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewTapToList = (newTap) => {
    const { dispatch } = this.props;
    const action = a.addTap(newTap);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
    this.setState({selectedTap: selectedTap});
  }

  handleDeletingTap = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTap(id);
    dispatch(action);
    this.setState({selectedTap: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTapInList = (tapToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTap(tapToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTap: null
    });
  }

  handleSellingPint = (drinkSold) => {
    if (drinkSold.pints > 0) {
      this.setState(prevState => ({
        masterTapList: prevState.masterTapList.map(
          (tap, index) => (tap.id === drinkSold.id ? Object.assign({}, this.state.masterTapList[index], { pints: parseInt
          (drinkSold.pints - 1) }) : tap)
        )
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = 
      <EditTapForm 
        tap = {this.state.selectedTap} 
        onEditTap = {this.handleEditingTapInList} />
        buttonText = "View Taps";
    } else if (this.state.selectedTap != null) {
      currentlyVisibleState = 
      <TapDetail 
        tap = {this.state.selectedTap} 
        onClickingDelete = {this.handleDeletingTap} 
        onClickingEdit = {this.handleEditClick} />
        buttonText = "View Taps";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewTapForm 
        onNewTapCreation = {this.handleAddingNewTapToList} />;
        buttonText = "View Taps";
    } else {
      currentlyVisibleState = 
      <TapList 
      tapList = {this.props.masterTapList} 
      onTapSelection = {this.handleChangingSelectedTap} 
      onSellPint = {this.handleSellingPint} />
      buttonText = "Add Tap";
    }
    return (
      <>
        {currentlyVisibleState}
        <Button class="btn" onClick={this.handleClick}>{buttonText}</Button>
      </>
    );
  }
  
}


const mapStateToProps = state => {
  return {
    masterTapList: state.masterTapList,
    formVisibleOnPage: state.formVisibleOnPage
  }
};

TapControl.propTypes = {
  masterTapList: PropTypes.object
};

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;