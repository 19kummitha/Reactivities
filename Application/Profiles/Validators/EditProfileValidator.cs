using System;
using Application.Profiles.Command;
using FluentValidation;

namespace Application.Profiles.Validators;

public class EditProfileValidator : AbstractValidator<EditProfile.Command>
{
  public EditProfileValidator()
  {
    RuleFor(x => x.DisplayName).NotEmpty();
  }
}
