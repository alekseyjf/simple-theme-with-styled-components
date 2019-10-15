import React from "react";
import {Btn, Header} from "./style";
import {connect} from "react-redux";
import {choiseTheme} from "../../redux/actions";
import {invertColor} from "../../utils";

const App = (props) => {
  const {theme, choiseTheme} = props;

  const changeTheme = (name) => {
    const newTheme = theme.map(item => {
      if (item.name === name) {
        item.active = true
      } else {
        item.active = false
      }
      return item
    });
    choiseTheme(newTheme)
  };

  const changeColor = (e) => {
    invertColor(e.target.value);
    let newArr = theme.map(item => {
      if(item.active) item.active = false;
      return item
    });

    if(newArr.length > 3) {
      newArr[newArr.length - 1] = {
        name: '',
        bg: e.target.value,
        color: invertColor(e.target.value),
        active: true
      };
    } else {
      newArr.push({
        name: '',
        bg: e.target.value,
        color: invertColor(e.target.value),
        active: true
      });
    }
    choiseTheme(newArr)
  };

  const bgHeader = theme.find(item => item.active);

  return (
    <div>
      <Header className="header" bg={bgHeader.bg} color={bgHeader.color}>
        <h1>Some title</h1>
        {
          theme.map(item => {
            const {name, ...theme} = item;

            return (
              !name || <Btn onClick={() => {
                changeTheme(name)
              }} key={name} theme={theme}>{name}</Btn>
            )
          })
        }
      </Header>
      <main>
        <input onChange={changeColor} type="color"/>
      </main>
    </div>
  )
};

const mapStateToProps = ({theme}) => ({theme});

const mapDispatchToProps = {
  choiseTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(App);