export default{
    getUserId:state => state.userId,
    getErrorState : state=> state.errorState,
    getisAuth:state=>state.isAuth,
    loggedIn(state)
    {
        return !!state.user
    }
}