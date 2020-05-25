# frozen_string_literal: true

class Event < ApplicationRecord
  after_commit { EventBroadcastJob.perform_later self }
end
