/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm:"0.75rem",
        base:"0.875rem",
        md:"1rem",
        lg:"1.25rem",
        xl:"1.5rem",
        "2xl":"1.75rem",
        "3xl":"2.25rem"
      },

      backgroundImage: {
        'team-bg-image': "url('/public/teams/team.png')",
        'team-avatar': "url('/public/teams/team_avatar.png')",
        
      }
    },
  },
  plugins: [],
}


