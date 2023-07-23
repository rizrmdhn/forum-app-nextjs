export interface ILocaleData {
    // For Login
    textLogin: string;
    textRegister: string;
    textLogout: string;
    textHaveAccount: string;
    textNeedAccount: string;
    textRegisterHere: string;

    // Special
    textDarkMode: string;
    textLightMode: string;

    // For Menu
    textForum: string;
    textMenu: string;
    textLeaderboardMenu: string;
    textLeaderboard: string;
    

    // For Forum
    textCreatedBy: string;

    // For Leaderboard
    textUser: string;
    textScore: string;

    // For Submit
    textSubmit: string;

    // For Error
    textError: string;

    // For Success
    textSuccess: string;

    // For Loading
    textLoading: string;

    // For Input
    textName: string;
    textEmail: string;
    textPassword: string;
    textSearchThread: string;

    // For Comment
    textComment: string;
    textGiveComment: string;

    // For Alert
    textLoginToGiveComment: string;
    textLoginToVote: string;

}
const localeData: {[locale: string]: ILocaleData} = {
    id:{
        textLogin: 'Masuk',
        textRegister: 'Daftar',
        textLogout: 'Keluar',
        textHaveAccount: 'Sudah punya akun?',
        textNeedAccount: 'Belum punya akun?',
        textRegisterHere: 'Daftar disini',
        textForum: 'Forum',
        textMenu: 'Menu',
        textCreatedBy: 'Dibuat oleh',
        textLeaderboard: 'Klasemen Pengguna Aktif',
        textSubmit: 'Kirim',
        textDarkMode: 'Gelap',
        textLightMode: 'Terang',
        textEmail: 'Email',
        textPassword: 'Kata sandi',
        textName: 'Nama',
        textError: 'Error',
        textSuccess: 'Sukses',
        textLoading: 'Memuat',
        textSearchThread: 'Cari thread',
        textScore: 'Skor',
        textUser: 'Pengguna',
        textLeaderboardMenu: 'Klasemen',
        textComment: 'Komentar',
        textGiveComment: 'Beri komentar',
        textLoginToGiveComment: 'untuk memberi komentar',
        textLoginToVote: 'Login untuk melakukan vote'
    },
    en:{
        textLogin: 'Login',
        textRegister: 'Register',
        textLogout: 'Logout',
        textHaveAccount: 'Already have an account?',
        textNeedAccount: 'Need an account?',
        textRegisterHere: 'Register here',
        textForum: 'Forum',
        textMenu: 'Menu',
        textCreatedBy: 'Created by',
        textLeaderboard: 'Leaderboard',
        textSubmit: 'Submit',
        textDarkMode: 'Dark',
        textLightMode: 'Light',
        textEmail: 'Email',
        textPassword: 'Password',
        textName: 'Name',
        textError: 'Error',
        textSuccess: 'Success',
        textLoading: 'Loading',
        textSearchThread: 'Search thread',
        textScore: 'Score',
        textUser: 'User',
        textLeaderboardMenu: 'Leaderboard',
        textComment: 'Comment',
        textGiveComment: 'Send comment',
        textLoginToGiveComment: 'to comment',
        textLoginToVote: 'Login to vote'
    }
};

export default localeData;