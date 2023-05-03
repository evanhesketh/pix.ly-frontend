/**
 * Presentational component for an Alert to display error messages.
 *
 * Props:
 *  -error - String like "Invalid username/password"
 *
 * State:
 *  -none
 *
 * {LoginForm, SignupForm} -> Alert
 */
//TODO: prop for type of error
function Alert({error, type}) {
  return (
    <div className={`Alert alert ${type} role=alert`}>
      <div className="Alert-msg">{error}</div>
    </div>
  );
}

export default Alert;