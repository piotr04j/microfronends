import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Copyright: () => JSX.Element = () => {
  return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
  )
}

export default Copyright
