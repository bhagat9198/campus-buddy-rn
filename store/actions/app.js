import { db } from "./../firebase";

export const THEME_TOGGLE = "THEME_TOGGLE";

export const themeToggle = (darkState) => {
  return async (dispatch, getState) => {
   
    let auth = getState().authReducer.auth;
    if(! auth) {
      dispatch({
        type: THEME_TOGGLE,
        data: !darkState,
      });
      return {
        status: true,
      };
    }

    let userDarkState;
    try {
      const ref = await db.collection("miscellaneous").doc("theme").doc();
      const refDoc = await ref.get();
      const refData = await refDoc.data();
      refData.dark = !refData.dark;
      userDarkState = refData.dark;
      await ref.update(refData);
    } catch (error) {
      return {
        status: false,
        title: "Firebase Error",
        message: error.message,
      };
    }

    dispatch({
      type: THEME_TOGGLE,
      data: userDarkState,
    });
    return {
      status: true,
    };
  };
};

export const extractTheme = () => {
  return async (dispatch, getState) => {
    let auth = getState().authReducer.auth;
    if(!auth) {
      return;
    }
    
    let darkState;
    try {
      const ref = await db.collection("miscellaneous").doc("theme");
      const refDoc = await ref.get();
      darkState = refDoc.dark;
    } catch (error) {
      return {
        status: false,
        title: "Firebase Error",
        message: error.message,
      };
    }

    dispatch({
      type: THEME_TOGGLE,
      data: darkState,
    });
    return {
      status: true,
    };
  };
};

// export const themeToggleWithoutFirebase = (darkState) => {
//   return async (dispatch) => {
//     dispatch({
//       type: THEME_TOGGLE,
//       data: !darkState,
//     });
//     return {
//       status: true,
//     };
//   };
// };
