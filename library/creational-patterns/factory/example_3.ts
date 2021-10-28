class HttpError extends Error {
  public name: string;
  public statusCode: number;

  protected constructor(statusCode: number, name: string, message?: string) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }

  public static NotFoundError(message?: string): HttpError {
    return new HttpError(404, 'NotFoundError', message);
  }

  public static ForbiddenError(message?: string): HttpError {
    return new HttpError(403, 'ForbiddenError', message);
  }
}
