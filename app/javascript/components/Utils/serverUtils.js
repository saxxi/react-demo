function handleServerError(error) {
  if (error.response.status == 401) {
    return {
      type: 'server.UNAUTHORISED',
    }
  }
  return {
    type: 'server.GENERIC_ERROR',
    message: error.message,
  }
}

export {
  handleServerError,
}
