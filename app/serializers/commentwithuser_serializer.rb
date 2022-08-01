class CommentwithuserSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  has_one :user

  def user_name 
    
  end
end
