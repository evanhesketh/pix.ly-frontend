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
function Alert({error, type}: {error: any, type: String}) {
  console.log("error in Alert", error)
  return (
    <div className={`Alert alert ${type} role=alert`}>
      <div className="Alert-msg">{error}</div>
    </div>
  );
}

export default Alert;