import { TestBed } from '@angular/core/testing'

import { UserCustomizationService } from './user-customization.service'

describe('UserCustomizationService', () => {
  let service: UserCustomizationService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UserCustomizationService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
