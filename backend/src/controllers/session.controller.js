
export const sessionController= {
    login:  (req, res, next) => {
        res['successfullPost'](req.user)
    },

    current: async (req, res, next) =>{
        res['successfullGet'](req.user)
    },

    delete: (req, res) => {
        res['successfullLogout']()
    }
}